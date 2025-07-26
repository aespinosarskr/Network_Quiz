const questions = [
    {
        question: "¿Cuál es la función principal de la capa de enlace de datos?",
        options: [
            "Establecer rutas entre redes",
            "Transferir datos de la capa de red en el origen a la capa de red en el destino",
            "Controlar el acceso a Internet",
            "Ofrecer servicios de aplicaciones al usuario"
        ],
        answer: 1
    },
    {
        question: "¿Cómo se comunican los procesos de la capa de enlace de datos entre máquinas?",
        options: [
            "Mediante una base de datos compartida",
            "A través de la capa de presentación",
            "Mediante un protocolo de enlace de datos",
            "A través del sistema operativo"
        ],
        answer: 2
    },
    {
        question: "¿Qué servicio NO utiliza confirmación de recepción ni establece conexión lógica previa?",
        options: [
            "Servicio orientado a conexión",
            "Servicio sin conexión ni confirmación de recepción",
            "Servicio sin conexión con confirmación de recepción",
            "Servicio confiable de entrega"
        ],
        answer: 1
    },
    {
        question: "¿Cuál de las siguientes tecnologías es ejemplo de un servicio sin conexión ni confirmación de recepción?",
        options: [
            "WiFi (802.11)",
            "Ethernet",
            "Bluetooth",
            "MPLS"
        ],
        answer: 1
    },
    {
        question: "¿Qué servicio confirma individualmente la recepción de cada trama, pero sin establecer conexión lógica?",
        options: [
            "Servicio orientado a conexión",
            "Servicio sin conexión ni confirmación",
            "Servicio sin conexión con confirmación de recepción",
            "Servicio de control de flujo"
        ],
        answer: 2
    },
    {
        question: "¿Por qué no siempre es eficiente que la capa de red maneje la confirmación y retransmisión de paquetes?",
        options: [
            "Porque no puede comunicarse con la capa de aplicación",
            "Porque no conoce detalles del enlace físico, como la longitud máxima de trama",
            "Porque no tiene acceso a los protocolos de red",
            "Porque no puede numerar los paquetes"
        ],
        answer: 1
    },
    {
        question: "¿Cuál es la ventaja de confirmar y retransmitir tramas individualmente en la capa de enlace de datos?",
        options: [
            "Menor consumo de energía",
            "Reducción de interferencias",
            "Corrección rápida y eficiente de errores",
            "Mayor ancho de banda disponible"
        ],
        answer: 2
    },
    {
        question: "¿En qué casos se recomienda el uso de un servicio orientado a conexión con confirmación?",
        options: [
            "En enlaces largos y no confiables como canales satelitales",
            "En redes de área local de alta velocidad",
            "En transmisiones de video en tiempo real",
            "En redes sin pérdida de paquetes"
        ],
        answer: 0
    },
    {
        question: "¿Qué garantiza el servicio orientado a conexión de la capa de enlace de datos?",
        options: [
            "Que el paquete viaje por la ruta más corta",
            "Que el usuario pueda ver los errores en pantalla",
            "Que cada trama llegue exactamente una vez y en orden",
            "Que se eliminen errores lógicos del software"
        ],
        answer: 2
    },
    {
        question: "¿Cuáles son las tres fases de una conexión en un servicio orientado a conexión?",
        options: [
            "Conexión, cifrado, entrega",
            "Establecimiento, transmisión y liberación",
            "Prueba, envío, terminación",
            "Codificación, encapsulamiento, validación"
        ],
        answer: 1
    },

    {
        question: "¿Qué es un código sistemático?",
        options: [
            "Un código en el que los bits de datos se mezclan con los bits de verificación antes de enviarlos.",
            "Un código en el que los m bits de datos se envían directamente junto con los bits de verificación.",
            "Un código que utiliza únicamente tablas para codificación.",
            "Un código que sólo detecta errores pero no los corrige."
        ],
        answer: 1
    },
    {
        question: "¿Cómo se calculan los bits de verificación en un código lineal?",
        options: [
            "Con una función exponencial de los bits de datos.",
            "Como una función aleatoria de los bits de datos.",
            "Como una función lineal de los bits de datos.",
            "Utilizando algoritmos criptográficos complejos."
        ],
        answer: 2
    },
    {
        question: "¿Cuál es la operación más común para implementar códigos lineales?",
        options: [
            "Suma en base 10.",
            "Resta modular.",
            "OR exclusivo (XOR).",
            "AND lógico."
        ],
        answer: 2
    },
    {
        question: "¿Qué representa la tasa de código?",
        options: [
            "La cantidad total de bits enviados en la transmisión.",
            "La fracción de la palabra codificada que lleva información no redundante.",
            "El número de bits de verificación por bloque.",
            "La velocidad de transmisión en bits por segundo."
        ],
        answer: 1
    },
    {
        question: "Si un código tiene una tasa de 1/2, ¿qué significa?",
        options: [
            "Todo el mensaje es redundante.",
            "La mitad de la información recibida es redundante.",
            "No hay redundancia en el mensaje.",
            "Sólo se agrega un bit extra de verificación."
        ],
        answer: 1
    },
    {
        question: "¿Qué mide la distancia de Hamming entre dos palabras codificadas?",
        options: [
            "La diferencia entre el número de bits de datos y los de verificación.",
            "La cantidad de bits en los que difieren dos palabras codificadas.",
            "La longitud total del mensaje transmitido.",
            "El número de errores detectables por el código."
        ],
        answer: 1
    },
    {
        question: "¿Cómo se puede calcular la distancia de Hamming entre dos palabras codificadas?",
        options: [
            "Restando las dos palabras bit a bit.",
            "Aplicando OR entre ellas y contando los ceros.",
            "Aplicando XOR entre ellas y contando los unos.",
            "Multiplicando ambas palabras y contando los ceros."
        ],
        answer: 2
    },
    {
        question: "Si la distancia mínima de un código es d, ¿cuántos errores puede detectar?",
        options: [
            "d",
            "d - 1",
            "d + 1",
            "2d + 1"
        ],
        answer: 1
    },
    {
        question: "Para corregir d errores, ¿qué distancia mínima se necesita en el código?",
        options: [
            "d + 1",
            "d",
            "2d + 1",
            "2d"
        ],
        answer: 2
    },
    {
        question: "¿Qué proporción de todas las palabras posibles son válidas en un código con r bits de verificación?",
        options: [
            "1",
            "1/2",
            "1/2ʳ",
            "2ʳ"
        ],
        answer: 2
    },

    {
        question: "¿Qué dispositivo se menciona como hardware dedicado que implementa parte de la capa física y de enlace de datos?",
        options: [
            "CPU principal",
            "NIC (Tarjeta de Interfaz de Red)",
            "Acelerador gráfico",
            "Router"
        ],
        answer: 1
    },
    {
        question: "¿Dónde se ejecuta generalmente el software restante de la capa de enlace y la capa de red?",
        options: [
            "En la NIC",
            "En la CPU principal como parte del sistema operativo",
            "En un switch",
            "En el cable físico"
        ],
        answer: 1
    },
    {
        question: "¿Cuál es el objetivo principal de tratar las tres capas (física, enlace, red) como procesos independientes?",
        options: [
            "Reducir la redundancia",
            "Hacer más rápido el hardware",
            "Simplificar el análisis conceptual y enfatizar la independencia de las capas",
            "Implementar protocolos más complejos"
        ],
        answer: 2
    },
    {
        question: "¿Qué tipo de servicio se asume en el modelo inicial?",
        options: [
            "Servicio no confiable sin conexión",
            "Servicio confiable orientado a conexión",
            "Servicio sin acuse de recibo",
            "Servicio simplex sin errores"
        ],
        answer: 1
    },
    {
        question: "¿Qué sucede cuando la capa de enlace de datos acepta un paquete desde la capa de red?",
        options: [
            "Lo envía directamente al receptor",
            "Lo encapsula en una trama agregando un encabezado y un terminador",
            "Le aplica un cifrado completo",
            "Lo divide en múltiples paquetes"
        ],
        answer: 1
    },
    {
        question: "¿Qué contiene una trama según el texto?",
        options: [
            "Solo bits de datos",
            "Un paquete incrustado, encabezado de control y suma de verificación",
            "Únicamente un encabezado con datos comprimidos",
            "Un paquete sin redundancia"
        ],
        answer: 1
    },
    {
        question: "¿Qué algoritmo se menciona como ejemplo para la suma de verificación?",
        options: [
            "Hash MD5",
            "Algoritmo de CRC",
            "SHA-256",
            "Hamming"
        ],
        answer: 1
    },
    {
        question: "¿Cuál es la función del procedimiento `wait_for_event(&event)`?",
        options: [
            "Enviar tramas a la capa física",
            "Esperar hasta que ocurra un evento y registrarlo en la variable `event`",
            "Calcular la suma de verificación",
            "Recibir datos de la capa de red"
        ],
        answer: 1
    },
    {
        question: "¿Qué ocurre cuando una trama llega con error de suma de verificación?",
        options: [
            "Se envía de todas formas a la capa de red",
            "Se informa que ocurrió un error de transmisión (event = cksum_err)",
            "Se corrige automáticamente el error",
            "Se ignora el paquete sin informar"
        ],
        answer: 1
    },
    {
        question: "¿Por qué la capa de red nunca debe recibir el encabezado de una trama?",
        options: [
            "Porque el encabezado contiene direcciones IP",
            "Porque el encabezado pertenece únicamente al enlace de datos y no tiene significado para la capa de red",
            "Para reducir la latencia",
            "Para aumentar la redundancia"
        ],
        answer: 1

    },
    {
        question: "¿Cuál era la limitación principal de los protocolos anteriores mencionados en el texto?",
        options: [
            "Solo podían transmitir datos en ambas direcciones simultáneamente",
            "Solo transmitían datos en una sola dirección",
            "No permitían confirmaciones de recepción",
            "No soportaban tramas de datos"
        ],
        answer: 1
    },
    {
        question: "¿Cuál es la forma más simple de lograr transmisión full-dúplex según el texto?",
        options: [
            "Usar un solo enlace con piggybacking",
            "Tener dos instancias del protocolo en un solo enlace",
            "Usar dos instancias del protocolo con enlaces separados",
            "Eliminar las confirmaciones de recepción"
        ],
        answer: 2
    },
    {
        question: "¿Por qué se desaprovecha la capacidad del canal de retorno en los enfoques iniciales?",
        options: [
            "Porque se usa solo para confirmaciones y no para datos",
            "Porque es más lento que el canal de ida",
            "Porque está ocupado con tramas de datos",
            "Porque el canal no puede enviar confirmaciones"
        ],
        answer: 0
    },
    {
        question: "¿Cómo se llama la técnica que permite enviar confirmaciones junto con datos?",
        options: [
            "Multiplexing",
            "Piggybacking",
            "Sliding Window",
            "Stop and Wait"
        ],
        answer: 1
    },
    {
        question: "¿Cuál es la principal ventaja de usar piggybacking?",
        options: [
            "Aumenta la complejidad del protocolo",
            "Reduce el tiempo de transmisión",
            "Mejor aprovechamiento del ancho de banda y menos carga de procesamiento",
            "Permite eliminar el temporizador del emisor"
        ],
        answer: 2
    },
    {
        question: "¿Qué complicación introduce el piggybacking?",
        options: [
            "Se requiere un canal adicional",
            "Saber cuánto tiempo esperar antes de enviar la confirmación independiente",
            "Aumenta el tamaño de la trama significativamente",
            "Se pierde el control de los números de secuencia"
        ],
        answer: 1
    },
    {
        question: "¿Qué sucede si la capa de enlace espera demasiado para hacer piggybacking?",
        options: [
            "Se mejora la eficiencia del canal",
            "No se envía ninguna confirmación",
            "El emisor retransmitirá la trama",
            "El protocolo entra en modo simplex"
        ],
        answer: 2
    },
    {
        question: "¿Cuál es la estrategia mencionada para decidir si esperar o enviar la confirmación independiente?",
        options: [
            "Esperar hasta recibir todas las tramas",
            "Esperar un tiempo fijo en milisegundos",
            "Consultar la capa de red para predecir el siguiente paquete",
            "No enviar confirmaciones nunca"
        ],
        answer: 1
    },
    {
        question: "¿Cómo se llaman los protocolos que permiten transmisión bidireccional y usan números de secuencia?",
        options: [
            "Protocolos Stop-and-Wait",
            "Protocolos de ventana deslizante",
            "Protocolos de piggybacking",
            "Protocolos de confirmación simple"
        ],
        answer: 1
    },
    {
        question: "¿Qué representan los números de secuencia en la ventana del emisor?",
        options: [
            "Tramas que ya han sido confirmadas",
            "Tramas que pueden enviarse o que ya fueron enviadas y no confirmadas",
            "Tramas rechazadas por el receptor",
            "Paquetes de la capa de red"
        ],
        answer: 1
    },
    {
        question: "¿Cuál es la función principal de las redes LAN dentro de un solo edificio?",
        options: [
            "Interconectar redes de ISP",
            "Conectar computadoras localmente",
            "Conectar routers de larga distancia",
            "Transmitir datos vía satélite"
        ],
        answer: 1
    },
    {
        question: "¿Cuál es el protocolo físico comúnmente utilizado en enlaces de fibra óptica en redes de área amplia?",
        options: [
            "ADSL",
            "PPP",
            "SONET",
            "SLIP"
        ],
        answer: 2
    },
    {
        question: "¿Cuál es el propósito del protocolo PPP?",
        options: [
            "Transmitir señales satelitales",
            "Permitir conexiones inalámbricas",
            "Enviar paquetes a través de enlaces punto a punto",
            "Administrar servidores"
        ],
        answer: 2
    },
    {
        question: "¿Qué RFC define principalmente el protocolo PPP?",
        options: [
            "RFC 1918",
            "RFC 1661",
            "RFC 1035",
            "RFC 2616"
        ],
        answer: 1
    },
    {
        question: "¿Cuál de las siguientes es una característica principal de PPP?",
        options: [
            "Transmisión sin detección de errores",
            "Enrutamiento dinámico",
            "Método de entramado y detección de errores",
            "Administración de direcciones IP privadas"
        ],
        answer: 2
    },
    {
        question: "¿Cómo se llama el protocolo dentro de PPP encargado de activar, probar y desactivar líneas?",
        options: [
            "HDLC",
            "SLIP",
            "NCP",
            "LCP"
        ],
        answer: 3
    },
    {
        question: "¿Qué hace el protocolo NCP dentro del marco de PPP?",
        options: [
            "Reemplaza a HDLC",
            "Provee independencia del protocolo de red",
            "Crea la estructura física del enlace",
            "Asigna direcciones IP automáticamente"
        ],
        answer: 1
    },
    {
        question: "¿Qué diferencia principal tiene PPP respecto a HDLC?",
        options: [
            "PPP usa una estructura orientada a bits",
            "HDLC permite menos protocolos",
            "PPP está orientado a bytes",
            "PPP no usa relleno"
        ],
        answer: 2
    },
    {
        question: "¿Cuál es el valor hexadecimal del byte bandera utilizado para delimitar tramas PPP?",
        options: [
            "0xFF",
            "0x7D",
            "0x20",
            "0x7E"
        ],
        answer: 3
    },
    {
        question: "¿Qué ocurre si el byte de bandera 0x7E aparece dentro del campo de datos?",
        options: [
            "Se elimina completamente",
            "Se reemplaza por ceros",
            "Se escapa con el byte 0x7D y se aplica un XOR con 0x20",
            "Se permite sin modificación"
        ],
        answer: 2
    }
];