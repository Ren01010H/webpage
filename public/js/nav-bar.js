

$('.dropdown-menu').on('click', function (e) {
    e.stopPropagation();
})

$('#btnProductos').mouseover(() => {
    if ($('#dropdown-menu-servicios').is(":visible") || $('#dropdown-menu-cursos').is(":visible")) {
        $('#dropdown-menu-cursos').hide();
        $('#dropdown-menu-servicios').hide();
        $('#dropdown-menu-productos').show();
    } else if (!$('dropdown-menu-servicios').is(':visible') && !$('dropdown-menu-cursos').is(':visible')) {
        $('#dropdown-menu-productos').slideDown(500);
    }
})

$('#btnServicios').mouseover(() => {
    if ($('#dropdown-menu-productos').is(":visible") || $('#dropdown-menu-cursos').is(":visible")) {
        $('#dropdown-menu-cursos').hide();
        $('#dropdown-menu-servicios').show();
        $('#dropdown-menu-productos').hide();
    } else if (!$('dropdown-menu-cursos').is(':visible') && !$('dropdown-menu-productos').is(':visible')) {
        $('#dropdown-menu-servicios').slideDown(500);
    }
})

$('#btnCursos').mouseover(() => {
    if ($('#dropdown-menu-servicios').is(":visible") || $('#dropdown-menu-productos').is(':visible')) {
        $('#dropdown-menu-cursos').show();
        $('#dropdown-menu-servicios').hide();
        $('#dropdown-menu-productos').hide();
    } else if (!$('dropdown-menu-servicios').is(':visible') && !$('dropdown-menu-productos').is(':visible')) {
        $('#dropdown-menu-cursos').slideDown(500);
    }
})

$('#dropdown-menu-servicios').mouseleave(() => {
    $('#dropdown-menu-servicios').slideUp(500);
})

$('#dropdown-menu-productos').mouseleave(() => {
    $('#dropdown-menu-productos').slideUp(500);
})

$('#dropdown-menu-cursos').mouseleave(() => {
    $('#dropdown-menu-cursos').slideUp(500);
})

$("#navbarDropdownMenuLink").click(function () {
    if ($('#dropdown-menu-servicios').is(":visible")) {
        $('#dropdown-menu-productos').hide();
        $('#dropdown-menu-servicios').slideUp(500);
    } else {
        $('#dropdown-menu-productos').hide();
        $('#dropdown-menu-servicios').slideDown(500);
    }
    $('#change_title_servicios').text('Servicios');
    $('#change_description_servicios').text('La Innovación Tecnologíca es el medio más importante que ofrecemos para fortalecer la experiencia del cliente.');
    $("#change_image_servicios").attr("src", "/img/servicios.jpg");
})

$("#navbarDropdownMenuLinkProductos").click(function () {
    if ($('#dropdown-menu-productos').is(":visible")) {
        $('#dropdown-menu-servicios').hide();
        $('#dropdown-menu-productos').slideUp(500);
    } else {
        $('#dropdown-menu-servicios').hide();
        $('#dropdown-menu-productos').slideDown(500);
    }
    $('#change_title').text('Productos');
    $('#change_description').text('Somos una empresa de tecnología que proporciona soluciones que cubren las más altas exigencias de los clientes.');
    $('#change_description_productos').text('');
    $('#change_description_productos2').text('');
    $("#change_image_productos").attr("src", "/img/productos.jpg");
})

$("#btnServSeguridad").mouseover(function () {
    $('#change_title_servicios').text('Seguridad de la Información');
    $('#change_description_servicios').text('Proveemos asesoramiento y aplicación a escenarios reales para asegurar la información de la empresa.');
    $("#change_image_servicios").attr("src", "/img/seguridad.png");
})

$("#btnServCableado").mouseover(function () {
    $('#change_title_servicios').text('Cableado Estructurado');
    $('#change_description_servicios').text('Realizamos diseño, instalación y mantenimiento de redes de voz y datos, usamos materiales de reconocido prestigio internacional.');
    $("#change_image_servicios").attr("src", "/img/cableado.jpg");
})

$("#btnServMantenimiento").mouseover(function () {
    $('#change_title_servicios').text('Mantenimiento a Equipos de Computo');
    $('#change_description_servicios').text('Realizamos el mantenimiento preventivo y correctivo a equipos de computo.');
    $("#change_image_servicios").attr("src", "/img/mantenimiento.jpg");
})

$("#btnServSoporte").mouseover(function () {
    $('#change_title_servicios').text('Soporte Tecnológico');
    $('#change_description_servicios').text('Realizamos soporte Técnico a Sistemas Operativos, Bases de Datos, Programas de Terceros y Respaldos.');
    $("#change_image_servicios").attr("src", "/img/soporte.jpg");
})

$("#btnServDesarrollo").mouseover(function () {
    $('#change_title_servicios').text('Desarrollo de Sistemas');
    $('#change_description_servicios').text('Desarrollamos Sistemas Ad-Hoc ( WEB, Cliente/Servidor ).');
    $("#change_image_servicios").attr("src", "/img/desarrollo.jpg");
})


$("#btnServFormacion").mouseover(function () {
    $('#change_title_servicios').text('Formación');
    $('#change_description_servicios').text('Fromamos profesionales en diferentes campos (Redes, Seguridad, Sistemas Operativos, Base de Datos).');
    $("#change_image_servicios").attr("src", "/img/formacion.jpg");
})

$("#btnProdSeguridad").mouseover(function () {
    $('#change_title').text('Seguridad de la Información');
    $('#change_description').text('Asegurar la información es nuestra prioridad.');
    $('#change_description_productos').text('Proveemos de asesoramiento y aplicación a escenarios reales para asegurar la información de la empresa en base a medidas preventivas y reactivas de las organizaciones y de los sistemas tecnológicos permitiendo resguardar y proteger la información buscando mantener la confidencialidad, la disponibilidad e integridad de datos.');
    $('#change_description_productos2').text('');
    $("#change_image_productos").attr("src", "/img/seguridad.png");
})

$("#btnProdCableado").mouseover(function () {
    $('#change_title').text('Redes y Cableado Estructurado');
    $('#change_description').text('Diseño y Rediseño de Redes de Voz y Datos.');
    $('#change_description_productos').text('Realizamos diseño, instalación y mantenimiento de redes de voz y datos, usamos materiales de reconocido prestigio internacional.');
    $('#change_description_productos2').text('Apoyamos en el diseño y mantenimiento de la red informática, para evitar problemas de perdidas de datos, caídas continuas de la red, problemas de lentitud en el procesamiento de la información y problemas de seguridad informática.');
    $("#change_image_productos").attr("src", "/img/cableado.jpg");
})

$("#btnProdMantenimiento").mouseover(function () {
    $('#change_title').text('Mantenimiento y Soporte Tecnológico');
    $('#change_description').text('Administración y Mantenimiento de Equipos de Computo.');
    $('#change_description_productos').text('Realizamos el mantenimiento preventivo y correctivo de equipo. Computadoras de escritorio ,Computadoras portátiles, Servidores, Impresoras, Respaldos, Equipo de Comunicaciones.');
    $('#change_description_productos2').text('Proporcionamos soporte en sistemas operativos, Bases de Datos, WEB, AppServer, Middleware');
    $("#change_image_productos").attr("src", "/img/mantenimiento.jpg");
})

$("#btnProdDesarrollo").mouseover(function () {
    $('#change_title').text('Desarrollo de Sistemas');
    $('#change_description').text('Mantenimiento y Desarrollo de Sistemas.');
    $('#change_description_productos').text('Realizamos diseño multimedia acordes a la necesidad de su empresa, ofrecemos desarrollo y mantenimiento de páginas Web.');
    $('#change_description_productos2').text('Desarrollamos aplicaciones a medida de su empresa (Cliente/Servidor,Bases de Datos, Frameworks).');
    $("#change_image_productos").attr("src", "/img/desarrollo.jpg");
})

$("#btnProdFormacion").mouseover(function () {
    $('#change_title').text('Formación');
    $('#change_description').text('Nuevas Tecnologías.');
    $('#change_description_productos').text('Formamos profesionales en los siguientes campos tecnológicos.');
    $('#change_description_productos2').text('UNIX Linux/Solaris/AIX, MVS, Mainframe, Redes LAN/WAN/MAN/DNS, Firewall/NAT/ACL/RADIUS/TACACS/SAMBA, Arquitecturas Internet, Bases de Datos (Relacionales, LDAP, NON-SQL), WEB & Applicatios Servers, Cloud');
    $("#change_image_productos").attr("src", "/img/formacion.jpg");
})

$("#btnCurLinux").mouseover(function () {
    $('#change_title_cursos').text('Linux');
    $('#change_description_cursos').text('Los Cursos Linux está dirigido a estudiantes, profesionales y administradores informáticos, que deseen aprender el funcionamiento del sistema GNU/Linux y comprender los sistemas de código abierto. También está dirigido para aquellas personas que quieran repasar o profundizar conceptos básicos. No es necesario tener conocimientos previos.');
    $('#list1').text('Linux Basico');
    $('#list2').text('Linux Administracion Basico');
    $('#list3').text('Linux Administracion Avanzado');
    $('#list4').text('Seguridad Linux');
    $('#list5').text('Servidores (FTP,SHH,e-MAIL)');
    $('#list6').text('');
    $('#list7').text('');
    $("#change_image_cursos").attr("src", "/img/linux.jpg");
})

$("#btnCurRedes").mouseover(function () {
    $('#change_title_cursos').text('Redes');
    $('#change_description_cursos').text('Estos cursos de redes están dirigidos a personas con o sin conocimientos previos en informática, que deseen aprender a diseñar, configurar y solucionar problemáticas de redes de computadoras.');
    $('#list1').text('Redes Basico');
    $('#list2').text('Enrutamiento');
    $('#list3').text('LAN Switching');
    $('#list4').text('Tecnologias WAN');
    $('#list5').text('Seguridad en RED');
    $('#list6').text('IPV6');
    $('#list7').text('WireShark');
    $("#change_image_cursos").attr("src", "/img/redes.jpg");
})

$("#btnCurVirtualizacion").mouseover(function () {
    $('#change_title_cursos').text('Virtualizacion');
    $('#change_description_cursos').text('Este curso ha sido diseñado para facilitar el arranque inicial, proporcionando bases muy sólidas que permiten al alumno abordar cualquier instalación de LNX Container y Virtual Box. Aprenderá OpenStack de una forma entretenida, practica, divertida  y eficaz.');
    $('#list1').text('KMV');
    $('#list2').text('OpenStack');
    $('#list3').text('LNX Container');
    $('#list4').text('Virtual Box');
    $('#list5').text('');
    $('#list6').text('');
    $('#list7').text('');
    $("#change_image_cursos").attr("src", "/img/container.jpg");
})

$("#btnCurSecurity").mouseover(function () {
    $('#change_title_cursos').text('IT Security');
    $('#change_description_cursos').text('En este curso, explorará la seguridad de la información a través de algunos materiales introductorios y obtendrá una apreciación del alcance y el contexto en torno al tema. Esto incluye una breve introducción a la criptografía, la gestión de seguridad y la seguridad de redes y computadoras que le permite comenzar el viaje hacia el estudio de la seguridad de la información y desarrollar su apreciación de algunos conceptos clave de seguridad de la información.');
    $('#list1').text('Analisis de Vulnerabilidades');
    $('#list2').text('Redes WIFI WEP/WPA/WPA2');
    $('#list3').text('CiberSeguridad');
    $('#list4').text('Analisis Forense');
    $('#list5').text('');
    $('#list6').text('');
    $('#list7').text('');
    $("#change_image_cursos").attr("src", "/img/container.jpg");
})

