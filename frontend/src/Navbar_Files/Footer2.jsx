import React from 'react';

const Footer2 = () => {
    return (
        <footer className="bg-black text-white py-2 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto text-center text-[0.85rem]">
                <p>&copy; {new Date().getFullYear()} LearnLodge</p>
                <p><i>Learn Anytime Anywhere </i> 🎓🕜🌐</p>
            </div>
        </footer>
    );
};

export default Footer2;