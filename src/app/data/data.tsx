interface objData{
    name:string,
    event:string,
    sport:string,
    image:string
}

interface objData2{
    name:string,
    date:string
    team:string,
    image:string,
    btn:string

}

const sportsData:objData[]=[
    {
        name:"Sacramento River",
        event:"48 Events",
        sport:"Baseball",
        image:"./img/img1.png"
    },
    {
        name:"Las Vegas Aviators",
        event:"28 Events",
        sport:"Baseball",
        image:"./img/img3.png"
    },
    {
        name:"New Jersey Devils",
        event:"15 Events",
        sport:"Ice Hockey",
        image:"./img/img2.png"
    },
    {
        name:"Las Vegas Aviators",
        event:"28 Events",
        sport:"Baseball",
        image:"./img/img3.png"
    },

]



const sportsData2:objData2[]=[
    {
        name:"Las Vegas Aviators",
        date:"OCT 15 | SUN | 4:30 PM",
        team:"Las Vegas Blaipark, Las Vegas Nevada",
        image:"./img/sports2.png",
        btn:"Take Flight Collection"
    },
    {
        name:"Sacramento River Cats",
        date:"OCT 15 | SUN | 4:30 PM",
        team:"Sutter Health Park, Sacramento,California",
        image:"./img/sports1.png",
        btn:"Orange Collection"
    },
    {
        name:"Las Vegas Aviators",
        date:"OCT 15 | SUN | 4:30 PM",
        team:"Las Vegas Blaipark, Las Vegas Nevada",
        image:"./img/sports2.png",
        btn:"Take Flight Collection"
    },
]

export  {
    sportsData,
    sportsData2
};