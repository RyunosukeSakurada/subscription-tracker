import React, { useEffect, useState } from 'react'
import { db,auth } from "../firebase";

function TotalCost() {
  //合計コストを保持するための変数
  const [totalCost, setTotalCost] = useState(0);

  //初回のレンダリング時にサブスクリプションのコストの合計を計算し、totalCostの状態を更新
  useEffect(() => {
    //Firestoreのコレクションを参照
    const subscriptionRef = db.collection("subscriptions");
    //ドキュメントの変更を監視/ドキュメントが追加、更新、削除されたときにトリガーが発生
    const unsubscribe = subscriptionRef.onSnapshot((querySnapshot) => { //querySnapshot:変更があったドキュメントのスナップショット
      let total = 0;
      querySnapshot.forEach((doc) => {
        const subscription = doc.data(); //ドキュメントのデータオブジェクトを取得
        total += parseFloat(subscription.cost); //subscription.costを浮動小数点数に変換し、totalに加算
      });
      //totalCostの状態を更新
      setTotalCost(total);
    });
    //クリーンアップ関数:コンポーネントがアンマウントされる際に監視を停止
    return () => unsubscribe();
  }, []);
  

  return (
    <div className='mb-20'>
      <h2 className='text-xl lg:text-2xl'>Welcome Back <span className='bg-cyan-500 px-3 py-1 rounded'>{auth.currentUser.displayName}</span></h2>
      <div className='mx-auto text-center min-h-[200px] bg-gray-200 rounded-xl mt-8 text-zinc-800 p-8 justify-center items-center'>
        <p className='text-xl mb-6 font-semibold'>Spent for this month</p>
        <p className='text-5xl'>${totalCost}</p>
      </div>
    </div>
  )
}

export default TotalCost
