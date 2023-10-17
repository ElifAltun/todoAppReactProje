import React from 'react';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import {
  faCircleCheck,faPen,faTrashCan
} from '@fortawesome/free-solid-svg-icons' // svg iconları import ettim

const Yapilacaklar = ({toDo,gorevTamamlandi,setGoreviGuncelle,gorevSil}) => {
  return (
    <>
    
   {toDo && toDo
  //  kayıtları bir düzende sıralamak için yazdım.
   .sort((a,b)=>a.id > b.id ? 1 : -1 )
   .map((gorev,index)=>{

   
    {/* map:bir dizi öğe üzerinde döngü yapmak ve her bir öğe için belirli bir işlem yapmak için kullanılır. */}
    {/* Görevler için index alalım çünkü görevlerde 1,2,3 vs. numaralandırma göstereceğiz. */}
    return(
    <React.Fragment key={gorev.id}>

       {/* React.Fragment bir bileşenin birden fazla öğe döndürmesidir.Fragmentler, Dom'a ekstra düğüm eklemeden bir alt elemanlar listesini gruplandırmanıza izin verir. */}

    <div className='col gorevBg'>
      <div className={gorev.state ? 'done' : ''}>
      
      {/* eğer görev noktası durumu doğruysa o zaman sınıfı göster yanlışsa boş gelsin. */}


      <span className='gorevNumarasi'>{index + 1}</span>
      {/* +1 yazmazsak görev index'i 0 dan başlayacak o yüzden index +1 diyerek 1 den başlamasını ve 1'er 1'er artmasını sağladık. */}
      <span className='gorevText'>{gorev.title}</span>
      
      </div>
      <div className="iconlar">
        <span onClick={(e)=>gorevTamamlandi(gorev.id)} title='Tamanlandı/Tamamlanmadı' className="check"><FontAwesomeIcon icon={faCircleCheck}/></span>
      
      {/* görev durumun üst tarafta tersini aldım yani görev durumu tamamlandı iconuna basıldıysa o zaman düzenleme iconunu gizle tamamlandı iconuna basılmadıysa düzenleme iconunu göster. */}

      {gorev.state ? null: (
      <span onClick={()=>setGoreviGuncelle(
       {
        id: gorev.id,
        title:gorev.title,
        state:gorev.state ? true:false
       }
      )} title='Düzenle' className="pen"><FontAwesomeIcon icon={faPen}/></span>
      )}

        <span title='Sil' onClick={()=>gorevSil(gorev.id)} className="trashcan"><FontAwesomeIcon icon={faTrashCan}/></span>
      </div>
    </div>
    
    </React.Fragment>)
   })
   
   }
    </>
  )
}

export default Yapilacaklar