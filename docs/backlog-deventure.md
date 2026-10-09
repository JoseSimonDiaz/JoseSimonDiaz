# Deventure — Backlog de Historias de Usuario

Supuestos: equipo de 4 personas, sprints de **2 semanas**, velocidad estimada **~20 puntos/sprint** (equipo de estudiantes a tiempo parcial). Estimación en story points (Fibonacci).
Formato: *Como [actor] quiero [acción] para [beneficio]*. Prioridad: **MVP** / **Post-MVP**.

## Épicas
| Épica | Descripción | RF relacionados |
|---|---|---|
| E0 | Setup técnico | RNF05, RNF06 |
| E1 | Menú principal y ajustes | — |
| E2 | Jugador y progreso | RF08, RF09, RNF04 |
| E3 | Introducción y mapa | RF01, RF02, RF03 |
| E4 | Niveles y desafíos | RF04, RF05, RF06 |
| E5 | Ayuda y asistente | RF07 |
| E6 | Contenido educativo (zonas) | Obj. C# / SQL |
| E7 | Recompensas y galería | Alcance: galería |
| E8 | Administración de contenido | RF10 |
| E9 | Calidad y cierre | RNF01–07 |

## Tickets

| ID | Épica | Historia de usuario | Criterios de aceptación | Pts | Prioridad |
|---|---|---|---|---|---|
| DEV-01 | E0 | Como equipo quiero definir motor/plataforma y repositorio para trabajar en paralelo | Repo creado, motor elegido (ej. Unity/Godot), ramas y convenciones | 3 | MVP |
| DEV-02 | E0 | Como equipo quiero una arquitectura de datos para niveles (JSON/ScriptableObjects) para agregar niveles sin recodificar | Un nivel se carga desde archivo de datos | 5 | MVP |
| DEV-03 | E1 | Como jugador quiero ver el logo y los botones Jugar/Ajustes/Salir para empezar | Pantalla de inicio funcional, Salir cierra el juego | 2 | MVP |
| DEV-04 | E1 | Como jugador quiero silenciar o bajar la música | Slider de volumen + mute, se persiste | 2 | Post-MVP |
| DEV-05 | E1 | Como jugador quiero ajustar el brillo | Slider de brillo aplicado globalmente y persistido | 2 | Post-MVP |
| DEV-06 | E2 | Como jugador quiero crear mi perfil (nombre) para guardar mi avance | Alta de perfil, validación de nombre vacío | 3 | MVP |
| DEV-07 | E2 | Como jugador quiero que mi progreso se guarde automáticamente | Al completar nivel se guarda; al reabrir se recupera | 5 | MVP |
| DEV-08 | E2 | Como jugador quiero consultar qué niveles y desafíos completé | Pantalla de progreso con % por zona | 3 | Post-MVP |
| DEV-09 | E2 | Como jugador quiero elegir entre varios perfiles guardados | Lista de perfiles, seleccionar/eliminar | 3 | Post-MVP |
| DEV-10 | E2 | Como admin quiero que el guardado esté protegido para evitar trampas | Archivo cifrado o con checksum; si se altera se detecta | 3 | Post-MVP |
| DEV-11 | E3 | Como jugador quiero que un personaje me presente el juego y su dinámica | Diálogo de intro con texto, se puede avanzar/saltar | 3 | MVP |
| DEV-12 | E3 | Como jugador quiero ver un mapa con zonas y niveles | Mapa con nodos de nivel, estado bloqueado/desbloqueado/completado | 5 | MVP |
| DEV-13 | E3 | Como jugador quiero que se desbloquee el siguiente nivel al superar uno | Nivel N+1 se habilita al completar N | 3 | MVP |
| DEV-14 | E3 | Como jugador quiero arte y animaciones atractivas en el mapa (estilo Duolingo) | Assets finales, transiciones | 5 | Post-MVP |
| DEV-15 | E4 | Como jugador quiero ver el enunciado del desafío de forma clara | Pantalla de nivel con enunciado y área de respuesta | 3 | MVP |
| DEV-16 | E4 | Como jugador quiero resolver desafíos de opción múltiple | Selección y envío de respuesta | 3 | MVP |
| DEV-17 | E4 | Como jugador quiero resolver desafíos de "ordenar bloques de código" | Drag & drop de líneas; se valida el orden | 5 | MVP |
| DEV-18 | E4 | Como jugador quiero escribir código/completar huecos y que se valide la sintaxis | Validador por patrones/reglas (no compila); feedback correcto/incorrecto | 8 | MVP |
| DEV-19 | E4 | Como jugador quiero tener 3 vidas por nivel | Cada error resta vida; con 0 vidas se reinicia el nivel | 3 | MVP |
| DEV-20 | E4 | Como jugador quiero un mensaje de ánimo al fallar ("No te rindas…") | Mensaje al perder vida/nivel | 1 | MVP |
| DEV-21 | E4 | Como jugador quiero ver mi resultado al terminar un nivel | Pantalla de resultado (vidas restantes, estrellas) | 2 | MVP |
| DEV-22 | E4 | Como jugador quiero minijuegos adicionales (ej. depurar código, adivinar salida) | ≥2 tipos de minijuego extra | 8 | Post-MVP |
| DEV-23 | E5 | Como jugador quiero pedir una pista en un desafío | Botón pista muestra ayuda predefinida del nivel | 3 | MVP |
| DEV-24 | E5 | Como jugador quiero un asistente al que preguntar "¿en qué me equivoco?" | Asistente con respuestas contextuales (reglas o IA) | 8 | Post-MVP |
| DEV-25 | E6 | Como jugador quiero ver un video/explicación corta al entrar a una zona | Reproduce video o slides con ejemplos en el 1er nivel de la zona | 3 | MVP |
| DEV-26 | E6 | Como jugador quiero una zona "Lógica básica" (variables, condicionales) | 5 niveles con contenido y respuestas | 5 | MVP |
| DEV-27 | E6 | Como jugador quiero una zona "C# básico" (tipos, bucles, funciones) | 5–8 niveles | 8 | Post-MVP |
| DEV-28 | E6 | Como jugador quiero una zona "POO en C#" (clases, objetos) | 5–8 niveles | 8 | Post-MVP |
| DEV-29 | E6 | Como jugador quiero una zona "SQL" (SELECT, WHERE, JOIN, normalización) | 5–8 niveles | 8 | Post-MVP |
| DEV-30 | E6 | Como jugador quiero un mensaje final "Gracias por jugar…" al completar todo | Pantalla final al completar el último nivel | 1 | Post-MVP |
| DEV-31 | E7 | Como jugador quiero desbloquear recompensas (arte, personajes, plantillas) al superar niveles | Regla de desbloqueo por nivel/zona, notificación | 5 | Post-MVP |
| DEV-32 | E7 | Como jugador quiero ver una galería con lo desbloqueado | Galería con ítems bloqueados/desbloqueados | 3 | Post-MVP |
| DEV-33 | E8 | Como admin quiero agregar/modificar desafíos y niveles | Editor o panel (puede ser herramienta interna) que genera los datos de nivel | 8 | Post-MVP |
| DEV-34 | E8 | Como admin quiero consultar estadísticas básicas del juego | Ver jugadores y niveles completados | 3 | Post-MVP |
| DEV-35 | E9 | Como equipo quiero pruebas de usabilidad con usuarios sin conocimientos | Test con ≥3 personas, cambios aplicados | 3 | Post-MVP |
| DEV-36 | E9 | Como equipo quiero optimizar rendimiento y corregir bugs | Sin bloqueos, carga < 2 s | 5 | Post-MVP |
| DEV-37 | E9 | Como equipo quiero generar el build final y documentación | Ejecutable + manual de usuario | 3 | Post-MVP |

## Resumen

| | Tickets | Puntos |
|---|---|---|
| **MVP** | **21** (DEV-01–03, 06, 07, 11–13, 15–21, 23, 25, 26 + ver tabla) | **~75** |
| Post-MVP | 16 | ~94 |
| **Total** | **37** | **~169** |

## Plan de sprints (2 semanas, ~20 pts)

| Sprint | Objetivo | Tickets |
|---|---|---|
| S1 | Base técnica y navegación | DEV-01, 02, 03, 06, 11 (16 pts) |
| S2 | Mapa y estructura de niveles | DEV-12, 13, 15, 16, 07 (19 pts) |
| S3 | Mecánicas de desafío | DEV-17, 18, 19, 20 (17 pts) |
| S4 | **Cierre MVP**: contenido y ayuda | DEV-21, 23, 25, 26 (13 pts + estabilización) → **MVP jugable** |
| S5 | Ajustes, progreso y zona C# | DEV-04, 05, 08, 27 (15 pts) |
| S6 | POO + recompensas | DEV-28, 31, 32 (16 pts) |
| S7 | SQL + minijuegos | DEV-29, 22, 30 (17 pts) |
| S8 | Asistente y admin | DEV-24, 33, 09 (19 pts) |
| S9 | Seguridad, métricas, calidad | DEV-10, 34, 35, 36 (14 pts) |
| S10 | Release | DEV-37 + bugs/pulido |

**MVP: 21 tickets en 4 sprints (~8 semanas). Producto completo: 37 tickets en ~10 sprints (~20 semanas).**
Si se trabaja contra reloj, recortar a 8 sprints sacando DEV-24 (asistente IA → solo pistas), DEV-33 (editar JSON a mano) y DEV-34.
