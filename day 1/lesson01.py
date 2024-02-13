from turtle import *

#make house shape

speed(15)
width(7)
color("brown")
forward(400)
left(90)
 
forward(200)
left(90)

forward(500)
left(90)

forward(200)
left(90)


#end of house shape 

#start of making a door

forward(120)
color("grey")
left(90)

forward(130)
left(90)

forward(80)
left(90)

forward(130)
left(90)


penup()
goto(9, 55)
pendown()

color("black")
forward(5)

#end of making a door

#start of making a roof

penup()
goto(400, 200)
pendown()

color("grey")
begin_fill()
left(150)
forward(290)

left(60)
forward(290)
end_fill()

#end of making a roof

# start of making windows


penup()
goto(100, 50)
pendown()


right(120)
color("cyan")
forward(80)

right(90)
forward(70)

right(90)
forward(80)

right(90)
forward(70)

right(90)
forward(40)

right(90)
forward(70)

left(90)
forward(40)

left(90)
forward(35)

left(90)
forward(80)

penup()
goto(280, 50)
pendown()

left(90)
forward(70)

left(90)
forward(80)

left(90)
forward(70)

left(90)
forward(80)

left(180)
forward(40)

right(90)
forward(70)

left(90)
forward(40)

left(90)
forward(35)

left(90)
forward(80)

#end of making windows

exitonclick()