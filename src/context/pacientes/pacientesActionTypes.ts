export enum pacientesActionTypes {
    pacientesAddData = '[PACIENTE]ADD_DATA',
    pacientesGet = '[PACIENTE]GET',
    pacienteDelete = '[PACIENTE]DELETE',
    pacienteCreate = '[PACIENTE]CREATE',
    pacienteUpdate = '[PACIENTE]UPDATE',

    listOrder = '[LIST]ORDER',
    pacientesPorPagina = '[PAGINACION]NUMERO_PACIENTES',
    searchPacientes = '[SEARCH]PACIENTE',

    openModalNewPaciente = '[MODAL]OPEN_NEW_PACIENTE',
    closeModalNewPaciente = '[MODAL]CLOSE_NEW_PACIENTE',
    openModalFichaPaciente = '[MODAL]OPEN_FICHA_PACIENTE',
    closeModalFichaPaciente = '[MODAL]CLOSE_FICHA_PACIENTE'
};