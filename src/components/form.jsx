import React, {useState} from 'react';
import "./form.css"
import objFlow from "../api/api";

function Form() {
    const [flow, setFlow] = useState(objFlow);

    const flow1_to_flow2 = (i, a) => {
        delete flow.flow1[a]
        flow.flow2.push(i)
        setFlow(flow)
    }
    const flow2_to_flow1 = (i, a) => {
        delete flow.flow2[a]
        flow.flow1.push(i)
        setFlow(flow)
    }


    return (
        <>
            <div className="container">
                <div className={"my-form"}>
                    <div className={"form-2"}>
                        {"Вы записаны на потоки:"}
                        {flow.flow1.map((i, a) => (
                            <button
                                className={"btn btn-outline-secondary"}
                                onClick={() => flow1_to_flow2(i, a)}
                            >{i}</button>
                        ))}
                    </div>

                    <div className={"form-2"}>
                        {"Также можете записаться на потоки:"}
                        {flow.flow2.map((i, a) => (
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