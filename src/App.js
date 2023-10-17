import {useState} from 'react';

import GorevEkleForm from './components/GorevEkleForm.jsx';
import GuncelleForm from './components/GuncelleForm.jsx';
import Yapilacaklar from './components/Yapilacaklar.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';  //bootstrapteki özellikleri [yazı tipi] kullanmak için import ettik.

import './App.css';
function App() {
  // ! Görev listesi

  const [toDo,setToDo]=useState([
    //!Test ettiğim için kodumun çalışıp çalışmadığını default görevi açıklama satırına aldım.   

    {id:1,title:"Görev 1",state:false},
    {id:2,title:"Görev 2",state:false} 
    
  
    // durum doğru veya yanlış başlangıçtan itibaren uygulama bir şey göstermek için birkaç görevi varsayılan tutuyoruz fakat bu görevleri kaldıracağız eğer durum true olursa o görev tamamlandığı anlamına gelir, false ise görev tamamlanmadı anlamına gelir bide geçiçi olan durumda lazım
  ])

  // ! Geçici Durum

  const [yeniGorev,setYeniGorev]=useState('');  // yeni görev durumu
  // yeni görevler görev listesine eklenecek geçici verileri  tutmak için kullanılacak.
  const [goreviGuncelle,setGoreviGuncelle]=useState('')  // Görev Güncelleme useState
  // bu kısımda düzenlenecek olan görevi tutacak

  // ! Görevi Ekle

  const gorevEkle=()=>{
    if(yeniGorev)
    {
      // Eğer yeni görevimiz varsa o zaman bir id oluştur. ve sayıyı 1 artır.
      let sayi =toDo.length+1;
      // görevi ekleme görevi ekleyecek ama ilk durum false olacak
      let yeniGiris={id:sayi,title:yeniGorev,state:false}
      setToDo([...toDo,yeniGiris])
      // Görev listesinin tamamını alacak ve bizim yeni girişimizi ekleyecek.
      setYeniGorev('');
      // geçici durumu yani  inputun içini temizlemek için yaptım.
    }

  }

  // ! Görevi Sil
  // ! id'ye göre görevi silmek için id parametresi yazdık.
  const gorevSil=(id)=>{
    //id'leri ayrı tutrmak için filtre yöntemini kullandım. ve diziye filtrelemeyi uyguladım.aldığım id 'yi ve bu yeni görevleri set todo ile tekrar ekledim.
  let yeniGorevler=toDo.filter(gorev=>gorev.id !==id)
  setToDo(yeniGorevler);
    
  }

  // ! Görev Tamamlandı
   // ! id'ye göre tamamlanan görevi işaretlemek için id parametresi yazdık.
  const gorevTamamlandi=(id)=>{
    let yeniGorev=toDo.map(gorev=>{
      if(gorev.id ===id)
      {
        //görevlerim tamamını çektik ve temeldeki durumun tersini yazdım.ve tekrar görevi return ettim.

        return ({...gorev,state: !gorev.state})
      }
      return gorev;

    })
    // kalan durumu güncellemek için yazdım.
    setToDo (yeniGorev)
    
  }

  // ! Güncellemeyi iptal et 
   // ! id'ye göre güncellemeyi iptal etmek için id parametresi yazdık.
   const goreviIptalEt=()=>{
    setGoreviGuncelle('');
    
   }

     // ! Görevi Değiştir
     // ! id'ye göre güncellemeyi iptal etmek için id parametresi yazdık.

   const goreviDegistir=(e)=>{

  //  !İd ve durum aynı kalacak yanlızca biz yazdıkça başlık değiştirilecek


    // nesneyi güncelleme  verileri yeni girişin içine attım.id ve durum göreviGüncelle kısmından aldım ve verileri değiştirebiliyorum.
    let yeniGiris={
      id:goreviGuncelle.id,
      title: e.target.value,
      state:goreviGuncelle.state ? true:false
      // görevigüncelleme verileri durumu doğru doğru aksi durumda yanlıştır.
    }
    setGoreviGuncelle(yeniGiris);
    
   }

   // ! Görevi Güncelle
  const gorevGuncelle=()=>{
  //  kayıtları filtreleme
  let kayitlariFiltrele =[...toDo].filter(gorev =>gorev.id !==goreviGuncelle.id);
    let guncelNesne =[...kayitlariFiltrele,goreviGuncelle]
    setToDo(guncelNesne);
    setGoreviGuncelle('');
  }

  return (
    <div className="container App">
    <h2 className='mt-5 mb-5'>TO DO LİST</h2>


{/* eğer görevi güncelleyeceksem görevi güncelleme bölümü gelsin yoksa ekle kısmı görünsün */}

{goreviGuncelle && goreviGuncelle ?(
<GuncelleForm
goreviGuncelle={goreviGuncelle}
goreviDegistir={goreviDegistir}
gorevGuncelle={gorevGuncelle}
goreviIptalEt={goreviIptalEt}
/>
) : (
<GorevEkleForm 

yeniGorev={yeniGorev}
setYeniGorev={setYeniGorev}
gorevEkle={gorevEkle}
/>
)}

   {/* Listeyi Göster Mesajı */}
   {toDo && toDo.length ? '' : 'GÖREV YOK...'}
   {/*  Eğer liste ve listenin içinde görev varsa listeyi çağır. eğer görev yoksa listede görev yok mesajı verir. default bir görev listesi yazdığımız için görev yok mesajı almayız. */}

   <Yapilacaklar
   toDo={toDo}
   gorevTamamlandi={gorevTamamlandi}
   setGoreviGuncelle={setGoreviGuncelle}
   gorevSil={gorevSil}
   
   />

    </div>
  );
}

export default App;
