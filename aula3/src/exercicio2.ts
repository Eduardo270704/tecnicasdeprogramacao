class Z{
    tres():void{
        console.log('Três')
    }
}

class Y extends Z{
    dois():void{
        console.log('Dois')
    }
}

class X extends Y{
    um():void{
        console.log('Um')
    }
}

const z = new Z();
z.tres();