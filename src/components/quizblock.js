import {
    Box
} from '@chakra-ui/react'

export default function Quizblock() {
    return(
        <div>
            <Box as="button" bg="purple.500"  h='150px' w = '150px' >
                <Box
                mt="1"
                fontWeight="bold"
                fontSize='2xl'
                as="h2"
                lineHeight="tight"
                color="black"
                isTruncated
                >
                QUIZ 1
                </Box>
                <Box
                mt="1"
                as="h4"
                fontSize='sm'
                lineHeight="tight"
                color="white"
                isTruncated
                >
                15CSE199
                </Box>
            </Box>
        </div>
    );
}