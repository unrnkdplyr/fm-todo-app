import Footer from '../components/Footer'
import Header from '../components/Header'
import Todo from '../components/Todo'
import TodosProvider from '../contexts/TodosProvider'

export default function Home() {
  return (
    <TodosProvider>
      <Header />
      <Todo />
      <Footer />
    </TodosProvider>
  )
}
