class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machine 2022</h1>
                <Machine 
                s1="x"
                s2="x"
                s3="x"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))