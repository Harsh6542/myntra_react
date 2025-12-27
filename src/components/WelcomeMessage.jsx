const WelcomeMessage = ({ onGetPostclick }) => {
    return <center className="welcomeMsg">
        <h1 >There is No Post. </h1>
        <button onClick={onGetPostclick} type="button" className="btn btn-success">Get Posts From Server</button>
    </center>
}
export default WelcomeMessage