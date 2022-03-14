import React, { useEffect, memo, useState } from 'react'

/* aqui não pergunta se quero atualizar ou não, pergunta apenas se ele é igual... 
se for igual (true), então não vai atualiza o ciclo de vida, pq ele é igual */
const areEqual = (prevProps, nextProps) => {
    // return true     // exemplo de q não faz o re-render.
    return prevProps.loading === nextProps.loading
}
// qse q o inverso do shouldComponentUpadate, pq pergunta se não pode atualizar (!==)

const Twitter = (props) => {

    const { loading } = props
    const [tweet, setTweet] = useState('title')

    // state = {
    //     tweet: 'title'
    // }

    // componentWillMount() {
    //     console.log('componentWillMount')
    // }

    // componentDidMount = () => {
    //     const { posts, loading } = props
    //     console.log('componentDidMount', posts)
    //     console.log('componentDidMount: loading', loading)
    // }

    // componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log('componentDidMount', posts)
        console.log('componentDidMount: loading', loading)
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate', loading)
    }, [loading])

    /* #1 componentDidUpdate e componentWillUnmount podem estar todos dentro do mesmo useEffect(), por exemplo, porém é mais indicado deixá-los semparados.
       #2 sempre que tiver um return () => {} dentro de um useEffect, significa que um componentWillUnmount está sendo tratado. */

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount: fui removido')
        }
    }, [])

    /* shouldComponentUpadate é reescrito com hooks atrasvés do "memo" 
    ele aceita como um segundo argumento uma função */

    // componentDidUpdate = (prevProps) => {
    //     const { loading } = props
    //     if (props.loading !== prevProps.loading ) {
    //         console.log('componentDidUpdate: loading', loading)
    //     }
    // }

    // componentWillUnmount = () => {
    //     console.log('componentWillUnmount: fui removido')
    // }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     return state.tweet !== nextState.tweet // || nextProps.loading !== props.loading
    // }


    const handleTweet = () => {
        setTweet('Tweet atualizado')
    }

    // tweet = () => {
    // setState({
    //     tweet: true
    // })
    // }

    console.log('Tweet atualizado', tweet)
    // const { posts } = props
    // console.log('render', posts)
    return (
        <div>
            <button onClick={handleTweet}>Re-render</button>
            TeStE
        </div>
    )
}

export default memo(Twitter, areEqual)