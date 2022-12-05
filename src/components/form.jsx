import React, {useState} from 'react';
import "./form.css"
import api from "../api/api"
import flow from "../api/api";


function Form() {
    const [floww, setFloww] = useState(flow);
    // console.log(123123)
    // useEffect(() => {
    //     api.fetchAll().then((data) => setFlow(data))
    //     console.log(2134214, flow)
    // }, [])


    const flow1_to_flow2 = (i, a) => {
        floww.flow1.splice(a, 1)
        floww.flow2.push(i)
        update()
    }

    const flow2_to_flow1 = (i, a) => {
        floww.flow2.splice(a, 1)
        floww.flow1.push(i)
        update()
    }

    const update = () => {
        const updatedArr = {...floww}
        setFloww(updatedArr)
    }


    return (
        // <>
        //     {api.fetchAll}
        //     {/*{JSON.stringify(flow?.flow1)}*/}
        //     <br/>
        //     {JSON.stringify(floww)}
        // </>
        <>
            <div className="container">
                <div className={"my-form"}>
                    <div className={"form-2"}>
                        {flow?.flow1.length > 0 && "Вы записаны на потоки:"}
                        {flow?.flow1.map((i, a) => (
                            <button
                                className={"btn btn-outline-secondary"}
                                onClick={() => flow1_to_flow2(i, a)}
                            >{i}</button>
                        ))}
                    </div>

                    <div className={"form-2"}>
                        {flow?.flow2.length > 0 && "Можете записаться на потоки:"}
                        {flow?.flow2.map((i, a) => (
                            <button
                                className={"btn btn-outline-secondary"}
                                onClick={() => flow2_to_flow1(i, a)}
                            >{i}</button>
                        ))}
                    </div>

                    <div className={"form-2"}>
                        {"Ваш НДА:"}
                        {<hr/>}
                        {"✅ Действителен до 11.05.2025"}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;