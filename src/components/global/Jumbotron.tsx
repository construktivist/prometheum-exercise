import { FunctionComponent } from 'react'

const Jumbotron: FunctionComponent<{heading: string}> = ({ heading }) => {
    return (
        <div className="row">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="col-xs-12">
                        <h1 className="display-4">{heading}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;