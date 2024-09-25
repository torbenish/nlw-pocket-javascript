#!/bin/bash

   # Port for PostgreSQL
   PORT=5432

   # Find the process ID (PID) of any program running on port 5432
   PID=$(sudo lsof -t -i:$PORT)

   # If there's a PID, kill the process
   if [ -n "$PID" ]; then
     echo "PostgreSQL is running on port $PORT, stopping it..."
     sudo kill -9 $PID
   else
     echo "Port $PORT is free."
   fi
