import { Layout } from '../../components/Layout'
import CustomButton from '../../components/CustomButton'
import SearchBar from '../../components/SearchBar'
import InfoTexts from '../../components/InfoTexts'
import Tables from '../../components/Tables'

export const Alumnos = () => {
  return (
    <Layout>
      <div className='divStudents'>
        <div className='leftStudents'>
          <p className='transparentButton'>Accesos Rápidos</p>
        </div>
        <div className='rightStudents'>
          <div className='rowAR'>
            <div className='columnAR' >
              <CustomButton widthC='95%' title={'Preinscripciones'}></CustomButton>
              <CustomButton widthC='95%' title={'Inscripciones'}></CustomButton>
              <CustomButton widthC='95%' title={'Baja Temporal'}></CustomButton>
            </div>
            <div className='columnAR' >
              <CustomButton widthC='95%' title={'Cambio de Grupo'}></CustomButton>
              <CustomButton widthC='95%' title={'Expediente del alumno'}></CustomButton>
              <CustomButton widthC='95%' title={'Baja definitiva'}></CustomButton>
            </div>
          </div>
        </div>
      </div>

      <div className='divBackground'>
        <div className='divColumns' style={{ justifyContent: 'space-between' }}>
          <h2>Alumnos Actuales</h2>
          <SearchBar />
        </div>
        <div>
          <InfoTexts iconName={'info'} text={'Haga click en el nombre del alumno para visualizar su expediente'}></InfoTexts>
          <Tables></Tables>
        </div>

      </div>

      <div className='divBackground'>
        <div className='divColumns' style={{ justifyContent: 'space-between' }}>
          <h2>Registro de Inscripciones</h2>
          <SearchBar />
        </div>
        <div>
        </div>
      </div>
    </Layout>
  )
}
