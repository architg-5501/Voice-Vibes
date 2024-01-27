'use client'
import React from "react";
export default function Modalgif() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
            {/* <Modal
                title={`Emotion: ${userInput}`}
                centered
                visible={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}

            >
                <div className="flex flex-col items-center bg-black">
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image width={200} src={imgPath} />

                    </Image.PreviewGroup>
                </div>

            </Modal> */}
        </div>
    );
}