// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1389483516193935410",
        serverId: "777271906486976512",
        token: process.env.boo3oo,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 15, // ثواني
            maxRetries: 50,
        },
        presence: {
            status: "dnd",
        },
        selfMute: false,
    },
      {
        channelId: "1389483516193935410",
        serverId: "777271906486976512",
        token: process.env.sexy,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 15, // ثواني
            maxRetries: 50,
        },
        presence: {
            status: "dnd",
        },
        selfMute: false,
    },
   ]
