


export const convertToCSV = (data: any) => {
    const array = [...data];
    let csv = '';
    array.forEach((row, idx) => {
        const thisRow = Object.keys(row);
        if (idx === 0) {
            thisRow.forEach((key, i) => {
                const separador = thisRow.length - 1 === i ? '\n' : ',';
                csv += key + separador;
            });
        }
        thisRow.forEach((row2, idx2) => {
            const thisRow2 = Object.keys(row[row2]);
            if (typeof (row[row2]) === 'object') {
                if (idx === 0) {
                    thisRow2.forEach((row3, idx3) => {
                        const separador = (thisRow.length - 2 === idx2 && thisRow2.length - 1 === idx3) ? '\n' : ',';
                        csv += row3 + separador;
                    });
                }
            }
        });
        thisRow.forEach((row2, idx2) => {
            if (typeof (row[row2]) === 'object') {
                const thisRow3 = Object.values(row[row2])
                thisRow3.forEach((row3, idx3) => {
                    const separador = ',';
                    if (typeof (row3) === 'string') {
                        csv += row3 + separador;
                    }
                });
                const thisRow4 = Object.keys(row[row2])
                thisRow4.forEach((row4, idx4) => {
                    const separador = ',';
                    if (thisRow4.length - 1 === idx4 && typeof (row[row2][row4]) !== 'string') {
                        for (let item in row[row2][row4]) {
                            csv += row[row2][row4][item] + separador;
                        }
                    }
                });
            } else {
                csv += row[row2] + '\n'
            }
        });
    })
    return csv;
}