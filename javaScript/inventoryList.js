function InventoryList( )
 {  
    const nombres = [];

    var nuevoObjeto = {
        add(name){
            if(nombres.length=9){
                console.log("no se pueden mas de 10");
            }else{
                nombres.push(name);
            }
        },
        remove(name){
            for (let index = 0; index < nombres.length; index++) {
                if(nombres[index]==name){
                    nombres[index]='';
                }else{
                    console.log('ese dato no se encuentra registrado');
                }              
            }
        },
        getList(){
            var lista = '';
            for (let index = 0; index < nombres.length; index++) {       
                lista = lista+" "+nombres[index];   
            }
            console.log(lista);
        }
      }
    console.log(nombres[0]);
 }

 InventoryList();