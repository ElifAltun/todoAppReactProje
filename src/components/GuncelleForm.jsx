import React from 'react';

const GuncelleForm = ({goreviGuncelle,goreviDegistir,gorevGuncelle,goreviIptalEt}) => {
  return (
    <>
  {/* Görev Güncelle */}
  <div className='row mb-3'>
      <div className="col">
        {/* butona basınca görev adı inputun içinde görünmesi için yazdım. */}
        <input value={goreviGuncelle && goreviGuncelle.title} 
        // görevi değiştirmek için  onchange kullandım.
        onChange={(e)=>goreviDegistir(e)}
        className="form-control form-control-lg"/>

      </div>
      <div className="col-auto">
        <button 
        onClick={gorevGuncelle}
        className='btn btn-lg ekle mr-20'>Güncelle</button>
        <button
        onClick={goreviIptalEt}
        className='btn btn-lg iptal'>İptal Et</button>
      </div>
    </div>

</>
  )
}

export default GuncelleForm