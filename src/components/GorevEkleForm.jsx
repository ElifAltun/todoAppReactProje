 import React from 'react';
 
 const GorevEkleForm = ({ yeniGorev,setYeniGorev,gorevEkle }) => {
   return (
    <>
    {/* Görev Ekle */}
    <div className='row mb-3'>
      <div className="col">
        {/* Yeni Görevi Değiştirmek için onChange function kullandım ve değeri kaydetsin */}
        <input value={yeniGorev} onChange={(e)=>setYeniGorev(e.target.value)} className="form-control form-control-lg"/>
      </div>
      <div className="col-auto">
        <button onClick={gorevEkle} className='btn btn-lg ekle'>Görev Ekle</button>
      </div>
    </div>

</>
   )
 }
 
 export default GorevEkleForm