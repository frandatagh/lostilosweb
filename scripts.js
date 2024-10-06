addEventListener('DOMContentLoaded', () => {
    const boton_ir_arriba = document.querySelector('#ir-arriba-boton');

    const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

    const irArriba = () => {
        if(obtener_pixeles_inicio() > 0){
            scrollTo(0,0)
        }
    }

    const indicarScroll = () => {
        if (obtener_pixeles_inicio() > 50) {
            boton_ir_arriba.className = 'mostrar'
        } else {
            boton_ir_arriba.className = 'ocultar'
        }
    }

    boton_ir_arriba.addEventListener('click', irArriba)
    window.addEventListener('scroll', indicarScroll)
})