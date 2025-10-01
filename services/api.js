import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://hxuhmcrcrgiddybmfcqn.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dWhtY3JjcmdpZGR5Ym1mY3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjQ1OTMsImV4cCI6MjA3NDkwMDU5M30.o6y1Eh6Tj8s7VFEmxzOL75rHuY77Wm4bDIxOXdloM7g',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dWhtY3JjcmdpZGR5Ym1mY3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjQ1OTMsImV4cCI6MjA3NDkwMDU5M30.o6y1Eh6Tj8s7VFEmxzOL75rHuY77Wm4bDIxOXdloM7g',
  },
});
