import Section_1 from './components/section1/Section_1'
import Section_2 from './components/section2/Section_2'

function App() {
 const users = [
  {
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Working with this team has transformed our banking experience through seamless technology and exceptional customer support.',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Their innovative financial solutions make managing money easier, faster, and more convenient for everyone.',
    tag: 'Professional'
  },
  {
    img: 'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'A reliable digital banking platform that combines security, simplicity, and personalized service for modern customers.',
    tag: 'Trusted'
  },
   {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Their innovative financial solutions make managing money easier, faster, and more convenient for everyone.',
    tag: 'Professional'
  }
]
  return (
    <div>
      <Section_1 users={users}/>
      <Section_2 />
    </div>
  )
}

export default App