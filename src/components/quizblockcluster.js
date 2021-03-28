import Quizblock from "../components/quizblock"
import {
    Box,
    Grid
} from '@chakra-ui/react'

export default function Quizblockcluster() {
    return(
    <div>
        <Box>
        <Grid templateColumns="repeat(5, 1fr)" >
            <Quizblock/>
            <Quizblock/>
            <Quizblock/>
            <Quizblock/>
            <Quizblock/>
        </Grid>
        </Box>
    </div>
    );
}