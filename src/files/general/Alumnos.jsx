import { Layout } from '../../components/Layout'
import { useState } from 'react';
import CustomButton from '../../components/CustomButton'
import InfoTexts from '../../components/InfoTexts'
import Tables from '../../components/Tables'
import DivContainer from '../../components/divContainer'
import { studentActions, tabs, tabledata, studentsInscripciones, studentSections } from '../../temp/tabledata'

export const Alumnos = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <Layout>
      <div className='divStudents'>
        <div className='leftStudents btn btn-primary'>
          <p className='transparentButton' onClick={() => setActiveSection(null)}  style={{cursor:'pointer'}}>Accesos Rápidos</p>
        </div>
        <div className='rightStudents'>
          <div className='rowAR'>
            {[0, 1].map(col => (
              <div className='columnAR' key={col}>
                {studentActions
                  .slice(col * 3, col * 3 + 3)
                  .map((title, index) => (
                    <CustomButton key={index} widthC='95%' title={title} onClick={() => setActiveSection(title)} />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeSection ? (
        <>

          {studentSections[activeSection] || (
            <DivContainer titleC="Error">
              <p>Sección no encontrada</p>
            </DivContainer>
          )}
        </>
      ) : (
        <>
          <DivContainer titleC="Alumnos Actuales" showSearchBar={false}>
            <InfoTexts
              iconName="info"
              text="Haga click en el nombre del alumno para visualizar su expediente"
            />
            <Tables tabs={tabs} tabledata={tabledata} />
          </DivContainer>

          <DivContainer titleC="Inscripciones Recientes" showButton={true} titleB="Inscribir Nuevo Alumno">
            <Tables tabs={tabs} tabledata={studentsInscripciones} />
          </DivContainer>
        </>
      )}

    

    </Layout>
  )
}
