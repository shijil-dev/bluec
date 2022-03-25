import { SimpleGrid} from "@chakra-ui/react";
import { Searchitems } from "./searchitems";
export const Results = () =>{ 
    const testprofiles = [
        {
            name : "Ram",
            place : "Calicut",
            tag: "Painter",
            sts:"Active",
            rate:'4.5'

        },
        {
            name : "Kiran",
            place : "Tanur",
            tag: "Plumber",
            sts:"Busy",
            rate:"5"

        },
        {
            name : "Babu",
            place : "Vallikkunnu",
            tag: "Singer",
            sts:"active",
            rate:"3"

        },
        {
            name : "Ramanujan",
            place : "Calicut",
            tag: "Painter",
            sts:"Active",
            rate:'4.5'

        },
        {
            name : "Kiran",
            place : "Tanur",
            tag: "Plumber",
            sts:"Busy",
            rate:"5"

        },
        {
            name : "Babu",
            place : "Vallikkunnu",
            tag: "Singer",
            sts:"active",
            rate:"3"

        },
        {
            name : "Najeed",
            place : "Parapangadi",
            tag: "Bandari",
            sts:"active",
            rate:"3"

        },

    ];
    return (
        <SimpleGrid>
           <Searchitems testprofiles={ testprofiles } />
           </SimpleGrid>
);
}