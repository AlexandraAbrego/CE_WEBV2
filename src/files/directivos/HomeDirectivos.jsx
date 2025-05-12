import { Calendar } from "../../components/Calendar"
import Checker from "../../components/Checker"
import CustomInput from "../../components/CustomInput"
import EventPreview from "../../components/EventPreview"
import CustomButton from "../../components/CustomButton";

export const HomeDirectivos = () => {
  return (
    <>
      <div className="divBackground">
        <div className="divColumns">
          <div className="divColumn">
            <Calendar></Calendar>
          </div>
          <div className="divColumn">
            <h2 >Próximos Eventos</h2>
            <div style={{ marginTop: '2rem' }}>
              <EventPreview colorT={'#e5254b'} title={'Junta Padres de Familia'}></EventPreview>
              <EventPreview colorT={'#ea7000'} title={'Junta de Consejo Técnico'}></EventPreview>
              <EventPreview colorT={'#038100'} title={'Reunión Programada'}></EventPreview>
              <EventPreview colorT={'#174ea6'} title={'Reunión con Proveedores'}></EventPreview>
              <EventPreview colorT={'#ffc30f'} title={'Firma de Boletas'}></EventPreview>
              <button className="buttonLinked" > <small>Ver más</small></button>
            </div>

          </div>

        </div>
      </div>

      <div className="divBackground">
        <h2>Crear Evento</h2>



        <h3 style={{ marginTop: '1rem' }}>Información del Evento</h3>

        <div className="gridTest">


          <div className="gridItem">
            <CustomInput placeHolder={'Título del Evento'}></CustomInput>
          </div>

          <div className="gridItem">
            <CustomInput placeHolder={'Descripción del Evento'}></CustomInput>
          </div>

          <div className="gridItem">
            <h3>Destinatarios:</h3>
            <Checker option={"Padres de Familia"}></Checker>
            <Checker option={"Docentes"}></Checker>
            <Checker option={"Administradores"}></Checker>
            <br/>
            <CustomButton title='Agendar Evento'  ></CustomButton>

          </div>


          <div className="gridItem">
            <h3>Seleccionar fecha:</h3>
            <Checker inputType="fecha"> </Checker>
          </div>
        </div>
        



      </div>
    </>
  )
}
