import hairstyle from "../models/HairStyle.js";


export async function AddHairStyle(req, res) {
    try {
        const NewHairStyle = new hairstyle(req.body);
        const HairStyleInsertData = await hairstyle.insertMany(NewHairStyle);
        if(!HairStyleInsertData) {
            throw new Error('Can not insert new hairstyle');
        }
        else {
            return res.json({
                success: true,
                message: "inserted new hairstyle",
                hairstyle: HairStyleInsertData
            })
        }
    } catch (error) {
        return res.status(404).send(error)
    }
}

export function GetAllHairStyle(req, res) {
    hairstyle.find()
        .select('Url Des')
        .then(allHairStyle => {
            return res.status(200).json({
                success: true,
                message: 'List of all hairstyle',
                Hairstyles: allHairStyle
            });
        })
        .catch((error) => {
            return (
                res.status(500).json({
                    success: false,
                    code: 8,
                    message: 'Can not get hairstyles. Please try again.',
                    description: error.message
                })
            )
        })
}