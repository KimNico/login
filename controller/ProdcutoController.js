class ProdcutoController{
  constructor(){
    this.productos=[];
  }
  getProductos(){
    if(this.productos == 0){
      return {error:'No se encuentra en producto'}
    }
    return this.productos
  }
  getProductosById(id){
    let producto = this.productos.filter(prod => Number(prod.id)== Number(id))
    if(this.productos == 0){
      return {error:'No se encuentra en producto'}
    }
    return this.productos
  }
  deleteProductoById({id}){
    let exist = false;
    for (let i = 0; i < this.productos.length; i++) {
      if (Number(this.productos[i].id) === Number(id)) {
        this.productos.splice(i, 1);
        exist = true;
      }
    }
    if (exist) return this.productos;
    return { error: 'producto no encontrado' };
  }
  addProducto(product) {
    const { titulo, precio, foto } = product;
    let id = 0;
    if (this.productos.length < 1) {
      id = 1;
      this.productos.push({ id, titulo, precio, foto });
    } else {
      id = this.productos[this.productos.length - 1].id + 1;
      this.productos.push({ id, titulo, precio, foto });
    }
    console.log(id);
    return product;
  }

  updateProductoById({ titulo, precio, foto }, { id }){

    let exist = false;
    let prod = 0;
    for (let i = 0; i < this.productos.length; i++) {
      if (Number(this.productos[i].id) === Number(id)) {
        if (title) this.productos[i].titulo = titulo;
        if (price) this.productos[i].precio = precio;
        if (thumbnail) this.productos[i].foto = foto;
        if (id) this.productos[i].id = id;
        exist = true;
        prod = i;
      }
    }
    if (!exist) return { error: 'producto no encontrado' };
    return this.productos[prod];
  }
}

module.exports= ProdcutoController