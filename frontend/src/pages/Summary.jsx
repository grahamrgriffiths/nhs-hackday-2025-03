import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Summary = () => {
    const [todoList, setTodoList] = useState([
        { date: "Mon, 2nd March", task: "Take paracetamol", done: false },
        { date: "Tue, 3rd March", task: "Take paracetamol", done: false },
        { date: "Wed, 4th March", task: "Go to excercise", done: false },
        { date: "Tue, 3rd March", task: "Take paracetamol", done: false },
    ]);
    
    const [note, setNote] = useState("");

    const toggleTask = (index) => {
        const updatedList = [...todoList];
        updatedList[index].done = !updatedList[index].done;
        setTodoList(updatedList);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Summary today</h2>
            <h4 className="text-center">02-03-2025</h4>
            <h4 className="text-center">Clinician name: Kath</h4>

            <div className="card mb-3">
                <div className="card-header bg-primary text-white">Summary</div>
                <div className="card-body">
                    <p className="card-text">You have been diagnosed with mild hypertension. To manage this, you should monitor your blood pressure regularly, reduce salt intake, and maintain a balanced diet. If your symptoms worsen, follow the treatment plan below.</p>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header bg-success text-white">Plan</div>
                <div className="card-body">
                    <p className="card-text">Take Amlodipine 5mg once daily in the morning with water. Continue this for 30 days. Avoid excessive caffeine and alcohol. Engage in at least 30 minutes of moderate exercise daily. Keep a log of your blood pressure readings.</p>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header bg-warning text-dark">If plan doesn't go well, we should...</div>
                <div className="card-body">
                    <p className="card-text">If your blood pressure remains high (above 140/90) for more than 3 consecutive days, contact your GP or call NHS 111 for further advice. If you experience severe chest pain, dizziness, or shortness of breath, call 999 immediately for emergency assistance.</p>
                </div>
            </div>
            <br />
            <hr />
            <h3 className="text-center mt-4">To Do List</h3>
            <table className="table table-bordered mt-3">
                <thead className="table-light">
                    <tr>
                        <th>Status</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((item, index) => (
                        <tr key={index}>
                            <td className="text-center">
                                <input 
                                    type="checkbox" 
                                    checked={item.done} 
                                    onChange={() => toggleTask(index)}
                                />
                            </td>
                            <td>{item.date}: {item.task}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="text-center mt-4">Note</h3>
            <textarea 
                className="form-control" 
                rows="3" 
                placeholder="Write your notes here..." 
                value={note} 
                onChange={(e) => setNote(e.target.value)}
            ></textarea>

            <br />
            <Link to="/" className="btn btn-secondary">Back Home</Link> 
        </div>
    );
};

export default Summary;