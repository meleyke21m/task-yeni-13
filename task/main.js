class Book{
    constructor(ad ,muellif){
        this.ad=ad;
        this.muellif=muellif;
        this.movcuddur=true
    }
}
class Kitabxana{
    constructor(){
        this.kitablar=[];

    }

    kitabElaveEt(kitab){
        this.kitablar.push(kitab);
        console.log(` ${kitab.ad} kitabxanaya elave edildi `);
        
    }

    kitabSil(ad){
        const index=this.kitablar.findIndex((kitab)=>kitab.ad===ad);
        if(index!==-1){
            const silinenkitab = this.kitablar.splice(index,1);
            console.log(` ${silinenkitab[0].ad}kitabxanadan silindi. `);
            
        }else{
            console.log(` ${ad} tapilmadi `);
            
        }
    }

    kitabver(ad){
        const kitab = this.kitablar.find((kitab)=>kitab.ad===ad);
        if(kitab&&kitab.movcuddur){
            kitab.movcuddur=false;
            console.log(`${ad} odunc verildi`);
            
        }else if(kitab){
            console.log(`${ad} hal-hazirda movcud deyil`);
            
        }else{
            console.log(`${ad} tapilmadi`);
            
        }
    }
     muellifeGoreAxdar(muellif){
        const muellifkitablari=this.kitablar.filter((kitab)=>kitab.muellif===muellif);
        return muellifkitablari;
     }
}

const kitabxana = new Kitabxana();
const kitab1=new Book(" herb ve sulh","lev tolstoy");
const kitab2=new Book("kurk montlu maddona ");
const kitab3=new Book(" 1988", "corc ourel");

kitabxana.kitabElaveEt(kitab1);
kitabxana.kitabElaveEt(kitab2);
kitabxana.kitabElaveEt(kitab3);

console.log("butun kitblar:",Kitabxana.kitablar);
kitabxana.kitabSil("herb ve sulh")
kitabxana.kitabver("1988")

kitabxana.kitabQaytar("1988")
