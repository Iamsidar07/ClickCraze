const banner = {
    name: "banner",
    title: "Banner",
    type: "document",
    fields: [
        {
            name: "bannerImages",
            title: "Banner Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ]
        }
    ]
}
export default banner;