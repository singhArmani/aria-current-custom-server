import Layout from '../components/layout'
export default function About({title}){
 return <Layout><h1>{title}</h1></Layout>
}

export async function getServerSideProps() {
 return {props: {title: 'About Page'}}
}
