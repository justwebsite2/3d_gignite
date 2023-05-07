import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Faq = () => {
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);

    const expandClass = (expand) => expand ? 'block' : 'hidden';
    const ansClass = (expand) => `${expandClass(expand)} p-4`;

    return (
        <div>
            <h2 className={`${styles.sectionHeadText} px-10 py-10`}>FAQ</h2>
            <div className="shadow rounded border border-gray-100 border-t-0 bg-gray-300 opacity-70 hover:opacity-100" onClick={() => setExpand1(!expand1)}>
                <div className="p-4 text-xl relative font-bold text-black">
                    <div className="w-5/6">
                        Gignite Question 1
                    </div>
                    <button
                        aria-label="question-expander"
                        className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
                    >
                        {expand1 ?
                            <FontAwesomeIcon icon={faChevronDown} className="w-5" />
                            :
                            <FontAwesomeIcon icon={faChevronUp} className="w-5" />
                        }
                    </button>
                </div>
                <div className={`${ansClass(expand1)} text-gray-500`}>
                    Answer 1.
                </div>
            </div>
            <div className="shadow rounded border border-gray-100 border-t-0 mt-4 bg-gray-300 opacity-70 hover:opacity-100" onClick={() => setExpand2(!expand2)}>
                <div className="p-4 text-xl relative font-bold text-black">
                    <div className="w-5/6">
                        Gignite Question 2
                    </div>
                    <button
                        aria-label="question-expander"
                        className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
                    >
                        {expand2 ?
                            <FontAwesomeIcon icon={faChevronDown} className="w-5" />
                            :
                            <FontAwesomeIcon icon={faChevronUp} className="w-5" />
                        }
                    </button>
                </div>
                <div className={`${ansClass(expand2)} text-gray-500`}>
                    Answer 2.
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(Faq, "faq");