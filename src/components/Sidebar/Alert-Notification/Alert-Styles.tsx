import styled from 'styled-components';


export const AlertDiv = styled.div` 

.sidebar__alert{
    min-height: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
}
 .sidebar__alert--warning {
    background: #FED859;
}


.sidebar__alert--info {
    background: #9DE1FE;
}

.sidebar__alert--danger {
    background: #F3645B;
}
.sidebar__alert-icon-wrapper {
    margin-right: 10px;
}

.sidebar__alert-icon {
    color: white;
}

.sidebar__alert-texts {
    flex: 1;
}

.sidebar__alert-text:first-of-type {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #343738;
}

.sidebar__alert-text:last-of-type {
    font-size: 0.85rem;
    color: #414A4E;
    line-height: 17px;
}

.sidebar__alert--danger .sidebar__alert-text:first-of-type, .sidebar__alert--danger .sidebar__alert-text:last-of-type {
    color: white;
}

` 