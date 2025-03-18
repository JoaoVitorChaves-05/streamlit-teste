import streamlit as st
import requests
import myComponent

st.title("Integração Streamlit + React")

st.write("Abaixo temos um componente React dentro do Streamlit:")

# Exibe o componente React no Streamlit

count = myComponent.react_counter(count=5)
st.write(f"O contador atual é: {count}")
#st.components.v1.iframe("http://localhost:8502/index.html", height=600)

# Outro componene Streamlit

st.write("Agora, vamos pegar o dado que enviamos")

if st.button("Buscar dados"):
    data = requests.get("http://localhost:8502/contador")

    st.write(data.json())