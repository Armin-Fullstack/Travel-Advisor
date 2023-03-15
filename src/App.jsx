import Header from "./components/Header"
import Pages from "./Pages/Pages"
import { ChakraProvider } from '@chakra-ui/react'



const App = () => {
  return (
   <ChakraProvider>
   <Header/>
   <Pages/>
   </ChakraProvider>
  )
}

export default App
