
            let comprar;

            while (comprar != 'Cancelar compra') {
                comprar = prompt("Seleccionar como desea abonar:\n\n- Efectivo.\n- Débito.\n- Crédito.\n- Cancelar compra.");

            switch (comprar) {
                case 'Efectivo':
                    let precio = prompt('Ingrese el precio de la compra:');
                    let descuento = prompt('Ingrese el descuento:');

                    if (valor = precio * descuento / 100){
                    alert("Se le aplico a su pedido al abonar en efectivo un descuento del " + descuento + "% "  + " por lo tanto el valor de su compra es " + valor + ".");
                    }
                    else if (descuento == 0){
                        alert("No se le aplico a su pedido un descuento "+ "por lo tanto el valor de su compra es " + precio + ".");
                    }
                    break;
                    case 'Débito':
                        let advertencia = alert("No hay promociones ni descuentos disponibles abonando con este medio de pago.");
                        let nuevatarjeta = prompt('Ingrese nombre de la tarjeta de débito.');
                        let nyatarjeta = prompt('Ingrese nombre y apellido.');
                        let fecdvenctarjeta = prompt('Ingrese fecha de vencimiento.');
                        let coddsegtarjeta = prompt('Ingrese código de seguridad.');
                        let dnititular = prompt('Ingrese el DNI del titular de la tarjeta.');
                        let preciodebito = parseInt(prompt('Ingrese el precio de la compra:'));
                        let saldosuficiente = parseInt(prompt('Ingrese el saldo disponible de su tarjeta de Débito:'));
                         
                         if (preciodebito <= saldosuficiente && preciodebito != ""){
                            alert("Datos ingresados: " +  nuevatarjeta + " ,"+ nyatarjeta + " ," + fecdvenctarjeta + " ," + coddsegtarjeta + " ," + dnititular + ". En 1 cuota de $" + preciodebito + ".");
                            alert("El pago fue recibido correctamente y ahora se puede preparar la compra para su entrega.");
                        }
                         else {
                                alert("Revisá los datos ingresados.");
                                alert("El pago fue rechazado. Intente nuevamente.");
                            }
                    break;
                    case 'Crédito':
                        let cadvertencia = alert("No hay promociones ni descuentos disponibles abonando con este medio de pago.");
                        let cnuevatarjeta = prompt('Ingrese nombre de la tarjeta de débito.');
                        let cnyatarjeta = prompt('Ingrese nombre y apellido.');
                        let cfecdvenctarjeta = prompt('Ingrese fecha de vencimiento.');
                        let ccoddsegtarjeta = prompt('Ingrese código de seguridad.');
                        let cdnititular = prompt('Ingrese el DNI del titular de la tarjeta.');

                        let comprarcuotas;

                        while (comprarcuotas != 'Salir') {
                        comprarcuotas = prompt("Seleccionar la cantidad de cuotas en que desea abonar:\n\n- 1\n- 3\n- 6\n- 12\n- 18\n- 24\n- Salir.");
                            
                        switch (comprarcuotas) {
                        case '1':
                            let preciocredito = parseInt(prompt('Ingrese el precio de la compra:'));
                            let saldosuficiente = parseInt(prompt('Ingrese el saldo disponible de su tarjeta de Crédito:'));
            
                             if (preciocredito <= saldosuficiente){
                                alert("Datos ingresados: " +  cnuevatarjeta + " ,"+ cnyatarjeta + " ," + cfecdvenctarjeta + " ," + ccoddsegtarjeta + " ," + cdnititular + ". En 1 cuota de $" + preciocredito + ".");
                                alert("El pago fue recibido correctamente y ahora se puede preparar la compra para su entrega.");
                            }
                            else {
                                alert("Revisá los datos ingresados.");
                                alert("El pago fue rechazado. Intente nuevamente.");
                            }
                        break;
                        
                        case '3':
                                    
                            let preciocredito3 = parseInt(prompt('Ingrese el precio de la compra:'));
                            let interesesc3 = 11.56;
                            let valorcinteres3 = (preciocredito3 * interesesc3) / 100;
                            let precioc3 = Number(preciocredito3 + valorcinteres3).toFixed(2);
                            let tcuota3 =  Number((precioc3 / 3).toFixed(2));
                           
                            if (tcuota3){
                                alert("Datos ingresados: " +  cnuevatarjeta + " ,"+ cnyatarjeta + " ," + cfecdvenctarjeta + " ," + ccoddsegtarjeta + " ," + cdnititular + ". En 3 cuotas de $" + tcuota3 + ". En total la compra tiene un valor de $" + precioc3);
                                alert("El pago fue recibido correctamente y ahora se puede preparar la compra para su entrega.");
                            }
                            else {
                                alert("Revisá los datos ingresados.");
                                alert("El pago fue rechazado. Intente nuevamente.");
                            }
                            break;
                                    
                        case '6':
                                    
                            let preciocredito6 = parseInt(prompt('Ingrese el precio de la compra:'));
                            let interesesc6 = 23.94;
                            let valorcinteres6 = (preciocredito6 * interesesc6) / 100;
                            let precioc6 = Number(preciocredito6 + valorcinteres6).toFixed(2);
                            let tcuota6 =  Number((precioc6 / 6).toFixed(2));
                           
                            if (tcuota6){
                                alert("Datos ingresados: " +  cnuevatarjeta + " ,"+ cnyatarjeta + " ," + cfecdvenctarjeta + " ," + ccoddsegtarjeta + " ," + cdnititular + ". En 6 cuotas de $" + tcuota6 + ". En total la compra tiene un valor de $" + precioc6);
                                alert("El pago fue recibido correctamente y ahora se puede preparar la compra para su entrega.");
                            }
                            else {
                                alert("Revisá los datos ingresados.");
                                alert("El pago fue rechazado. Intente nuevamente.");
                            }
                            break;
                                    
                            case '12':
                                    
                            let preciocredito12 = parseInt(prompt('Ingrese el precio de la compra:')); 
                            let interesesc12 = 52.54;
                            let valorcinteres12 = (preciocredito12 * interesesc12) / 100;
                            let precioc12 = Number(preciocredito12 + valorcinteres12).toFixed(2);
                            let tcuota12 =  Number((precioc12 / 12).toFixed(2));
                               
                            if (tcuota12){
                                alert("Datos ingresados: " +  cnuevatarjeta + " ,"+ cnyatarjeta + " ," + cfecdvenctarjeta + " ," + ccoddsegtarjeta + " ," + cdnititular + ". En 12 cuotas de $" + tcuota12 + ". En total la compra tiene un valor de $" + precioc12);
                                alert("El pago fue recibido correctamente y ahora se puede preparar la compra para su entrega.");
                            }
                            else {
                                alert("Revisá los datos ingresados.");
                                alert("El pago fue rechazado. Intente nuevamente.");
                            }
                            break;

                            case '18':
                                    
                            let preciocredito18 = parseInt(prompt('Ingrese el precio de la compra:')); 
                            let interesesc18 = 87.16;
                            let valorcinteres18 = (preciocredito18 * interesesc18) / 100;
                            let precioc18 = Number(preciocredito18 + valorcinteres18).toFixed(2);
                            let tcuota18 =  Number((precioc18 / 18).toFixed(2));

                            if (tcuota18){
                                alert("Datos ingresados: " +  cnuevatarjeta + " ,"+ cnyatarjeta + " ," + cfecdvenctarjeta + " ," + ccoddsegtarjeta + " ," + cdnititular + ". En 18 cuotas de $" + tcuota18 + ". En total la compra tiene un valor de $" + precioc18);
                                alert("El pago fue recibido correctamente y ahora se puede preparar la compra para su entrega.");
                            }
                            else {
                                alert("Revisá los datos ingresados.");
                                alert("El pago fue rechazado. Intente nuevamente.");
                            }

                            break;

                            case '24':
                                    
                            let preciocredito24 = parseInt(prompt('Ingrese el precio de la compra:')); 
                            let interesesc24 = 129.18;
                            let valorcinteres24 = (preciocredito24 * interesesc24) / 100;
                            let precioc24 = Number(preciocredito24 + valorcinteres24).toFixed(2);
                            let tcuota24 =  Number((precioc24 / 24).toFixed(2));
                            
                            if (tcuota24){
                                alert("Datos ingresados: " +  cnuevatarjeta + " ,"+ cnyatarjeta + " ," + cfecdvenctarjeta + " ," + ccoddsegtarjeta + " ," + cdnititular + ". En 24 cuotas de $" + tcuota24 + ". En total la compra tiene un valor de $" + precioc24);
                                alert("El pago fue recibido correctamente y ahora se puede preparar la compra para su entrega.");
                            }
                            else {
                                alert("Revisá los datos ingresados.");
                                alert("El pago fue rechazado. Intente nuevamente.");
                            }
                             comando = 'Salir';
                          
                             break;
                        
                        
                            }
                    }
            comando = 'Cancelar compra';

            break;
                     }
            }
              
    
            