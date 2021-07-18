function execute()
{
    var gifs=[
        'https://media1.tenor.com/images/782e5ff1810156a97cc6eb4284fb1173/tenor.gif?itemid=20873793',
        'https://media1.tenor.com/images/e03ed8725779edf90ef89c8ab8f96dbd/tenor.gif?itemid=22228991',
        'https://gemskul.com/wp-content/uploads/2021/02/Yunjin-e1614472074986.png',
        'https://64.media.tumblr.com/ce2956ff47a8704e16fa6ee4e3c383b1/d59734788847cd64-84/s1280x1920/654f135bf05056a9b8cbe88f00c141bee618a304.jpg',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmp3download.to%2Fdownload%2Fgenshin-impact-mmd4k60fpsyunjinmousou-kanshou-daishou-renmei-pleasereaddescription-mp3-download.2fr-RftKRmU&psig=AOvVaw3RGIIFdts8nYmSX5I45Cif&ust=1626718967302000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCIju0cae7fECFQAAAAAdAAAAABAg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw81josGJrsa4cV_GIV1ivy_Fr4Z32JFiD0Bf27qAYDO5BFTY_bGOVtR05xUZZHZo7zek&usqp=CAU',

    ];
    rng=Math.floor(Math.random()*6);
    return gifs[rng]
}
module.exports={execute}