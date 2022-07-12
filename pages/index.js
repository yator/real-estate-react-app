import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { fetchApi,baseUrl } from "../utils/fetchApi";
import Property from "../components/Property";

const Banner = ({
  purpose,
  imageUrl,
  linkName,
  buttonText,
  title1,
  title2,
  desc1,
  desc2,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br /> {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="green">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({propertiesForRent,propertiesForSale}) {

  console.log (propertiesForRent,propertiesForSale)

  return (
    <Box>
      
      <Flex flexWrap="wrap">
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}

      </Flex>
      
      <Flex flexWrap='wrap'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    </Box>
  );
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props: {
      propertiesForRent:propertyForRent?.hits,
      propertiesForSale:propertyForSale?.hits,
    }
  }
}
