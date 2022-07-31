import Footer from '../components/Footer'
import Header from '../components/Header'
import Todo from '../components/Todo'

import data from '../todo'

export default function Home() {
  return (
    <>
      <Header />
      <Todo data={data || []} />
      <Footer />
    </>
  )
}
