import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo: string    //whatsapp.png
    phone: string   //321658421
    message: string //Estas comunicandote con Vtex, por favor ingresa tu duda.
    width: number   //80px
    height: number  //80px
}


const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log("Mi mensaje formateado es", formattedMessage, logo)
    return <>  
        <div className="fixed bottom-2 right-2 flex flexColumn">
            <a href={`https://wa.me/${phone}?text=Me%20interesa%20lo%20que%20vendes`}
            target="_blank"
            rel="noreferrer noopener"
            >
            <img 
            src={logo} 
            width={width} 
            height={height}  
            alt="logo de whatsapp"
             />
            </a>
        </div>
     </>
}  

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "logo.png",
    phone: "3004507575",
    message: "Estas comunicandote con Vtex, por favor ingresa tu duda.",
    width: 80,
    height: 80
}

WhatsappButton.schema = {
    title: "Boton de whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "logo de whatsapp que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Telefono",
            description: "Agrega por favor el numero de telefono",
            type: "string"
        },
        message: {
            title: "Mensaje de whatsapp",
            description: "Agrega por favor el mensaje que se vera para tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
         },
         width: {
            title: "Telefono",
            description: "Agrega por favor el numero de telefono",
            type: "number"
        },
        height: {
            title: "Telefono",
            description: "Agrega por favor el numero de telefono",
            type: "string"
        }

    }
}


export default WhatsappButton; 