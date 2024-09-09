import CVEn from "../../data/Cristal Flores CV(EN).pdf";
import CVEs from "../../data/Cristal Flores CV(ES).pdf";

const downloadCVEn = async () => {
    fetch(CVEn).then((response) => {
        response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);

            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Cristal Flores CV(EN).pdf";
            alink.click();
        });
    });
};
const downloadCVEs = async () => {
    fetch(CVEs).then((response) => {
        response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);

            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Cristal Flores CV(ES).pdf";
            alink.click();
        });
    });
};

export default { downloadCVEn, downloadCVEs };
