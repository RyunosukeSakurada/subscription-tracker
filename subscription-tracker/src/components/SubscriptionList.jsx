import React, { useEffect, useState } from 'react'
import {TfiTrash} from "react-icons/tfi"
import {db} from "../firebase";

function SubscriptionList() {
  //取得したサブスクリプションのデータを保持
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    //.collection() : subscriptions」というFirestoreのコレクションを参照 
    //.onSnapshot() : ドキュメントの変更を監視 
    db.collection("subscriptions").onSnapshot((snapshot) => {
      setSubscriptions(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })) //ドキュメントのIDとデータを組み合わせたオブジェクトを作成
      );
    });
  }, []); //ドキュメントが追加、更新、削除されたときにトリガーが発生


  //Delete Subscription
  const handleDeleteSubscription = (id) => { //引数として削除するサブスクリプションのIDを受け取る
    db.collection("subscriptions").doc(id).delete()
      .then(() => {
        //削除されたサブスクリプションのIDと一致しないものだけが残る
        setSubscriptions(subscriptions.filter((subscription) => subscription.id !== id));
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className='my-20'>
      <h2 className='text-xl lg:text-2xl'>Subscriptions</h2>
      <ul className='max-w-[700px] mx-auto'>
        {subscriptions.map((subscription) => (
          <li 
            key={subscription.id} 
            data-id={subscription.id}
            className='flex justify-between items-center my-3 bg-gray-700 p-5 rounded-md'
          >
            <span className='text-xl font-semibold'>{subscription.data.name}</span>
            <div className='flex items-center gap-x-2'>
              <p className='text-xs sm:text-sm'><span className='font-semibold text-xl tsm:text-sm mr-1'>${subscription.data.cost}</span>/month</p>
              <TfiTrash className='text-2xl' onClick={() => handleDeleteSubscription(subscription.id)}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubscriptionList
