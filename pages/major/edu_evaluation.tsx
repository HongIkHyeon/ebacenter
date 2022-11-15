import React from "react";
import bannerImage from "../../public/images/major/evaluationbanner.jpg";
import MajorForm from "../../src/components/major/MajorForm";

function Edu_evaluation() {
    return (
        <div>
            <div>
                <MajorForm
                    bannerTitle='교육 평가'
                    bannerContent='교육 평가 학과에 대해 소개합니다.'
                    image={bannerImage}
                    introContent='교육 평가 학과에 대한 설명을 적어주세요'
                    prospectContent='교육 평가 학과에 대한 전망을 적어주세요'
                />
            </div>
        </div>
    );
}

export default Edu_evaluation;
