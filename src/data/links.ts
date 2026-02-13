export type DashboardLink = {
    title: string;
    url: string;
    icon?: string;
}

export type DashboardGroup = {
    id: "weticket" | "office";
    title: string;
    links: DashboardLink[];
}


export const groups: DashboardGroup[] = [
    {
        id: "weticket",
        title: "WeTicket links",
        links: [
            {
                title: "Fort arrangement",
                url: "https://app.weticket.io/geofort/events/op-en-top-fort-arrangement",
                icon: "🎟️",
            },
            {
                title: "Historische rondleiding",
                url: "https://app.weticket.io/geofort/events/historische-rondleiding",
                icon: "🏰",
            },
            {
                title: "Minecraft VR",
                url: "https://app.weticket.io/geofort/events/minecraft-vr",
                icon: "🕶️",
            },
            {
                title: "Minecraft workshop klimaat",
                url: "https://app.weticket.io/geofort/events/minecraft-workshop-klimaat",
                icon: "🌍",
            },
            {
                title: "Minecraft programmeren",
                url: "https://app.weticket.io/geofort/events/minecraft-programmeren",
                icon: "💻",
            },
        ],
    },
  {
    id: "office",
    title: "Office (later toevoegen)",
    links: [
                 {
                title: "Minecraft programmeren",
                url: "https://outlook.office.com/mail/",
                icon: "📥",
            },
    ],
  },
    

];

